# Inicia un servidor HTTP para compartir PanCalc en la red WiFi
# Tu celular debe estar en la MISMA red WiFi que esta PC

$port = 8000
$path = Split-Path -Parent $PSCommandPath

# Obtener IP local
$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {
    $_.InterfaceAlias -notmatch 'Loopback|Virtual|Bluetooth|vEthernet' -and
    $_.PrefixOrigin -eq 'Dhcp'
}).IPAddress | Select-Object -First 1

Write-Host ""
Write-Host "==============================" -ForegroundColor Green
Write-Host "  PANCALC - Servidor activo" -ForegroundColor Yellow
Write-Host "==============================" -ForegroundColor Green
Write-Host ""
Write-Host "  En tu PC:     http://localhost:$port" -ForegroundColor Cyan
Write-Host "  En tu celular: http://$ip`:$port" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Abre esa URL en el navegador de tu celular" -ForegroundColor White
Write-Host "  (misma red WiFi)"
Write-Host ""
Write-Host "  Presiona Ctrl+C para detener" -ForegroundColor Red
Write-Host "==============================" -ForegroundColor Green
Write-Host ""

$python = (Get-Command python -ErrorAction SilentlyContinue).Source
if ($python) {
    # Servidor Python: no requiere permisos de admin y manda no-cache
    & $python "$path\servidor.py"
} else {
    # Fallback: HttpListener (solo alcanzable por localhost sin admin)
    Write-Host "No se encontro Python, usando HttpListener (solo localhost)." -ForegroundColor Yellow
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$port/")
    $listener.Start()
    while ($true) {
        $ctx = $listener.GetContext()
        $req = $ctx.Request
        $res = $ctx.Response
        $urlPath = $req.Url.LocalPath.TrimStart('/')
        if ($urlPath -eq '') { $urlPath = 'index.html' }
        $file = Join-Path $path $urlPath
        if (Test-Path -LiteralPath $file -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($file).ToLower()
            $mime = @{
                '.html' = 'text/html; charset=utf-8'
                '.css'  = 'text/css; charset=utf-8'
                '.js'   = 'application/javascript; charset=utf-8'
                '.json' = 'application/json'
                '.png'  = 'image/png'
                '.ico'  = 'image/x-icon'
            }
            $bytes = [System.IO.File]::ReadAllBytes($file)
            $res.ContentType = $mime[$ext]
            $res.Headers.Add("Cache-Control", "no-store")
            $res.ContentLength64 = $bytes.Length
            $res.OutputStream.Write($bytes, 0, $bytes.Length)
            $res.OutputStream.Close()
        } else {
            $res.StatusCode = 404
            $res.Close()
        }
    }
    $listener.Stop()
}
