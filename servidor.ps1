# Inicia un servidor HTTP para compartir PanCalc en la red WiFi
# Tu celular debe estar en la MISMA red WiFi que esta PC

$port = 8000
$path = Split-Path -Parent $PSCommandPath

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://+:$port/")
$listener.Start()

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

$mime = @{
    '.html' = 'text/html; charset=utf-8'
    '.css'  = 'text/css; charset=utf-8'
    '.js'   = 'application/javascript; charset=utf-8'
    '.json' = 'application/json'
    '.png'  = 'image/png'
    '.ico'  = 'image/x-icon'
}

while ($true) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response

    $urlPath = $req.Url.LocalPath.TrimStart('/')
    if ($urlPath -eq '') { $urlPath = 'index.html' }

    $file = Join-Path $path $urlPath

    if (Test-Path -LiteralPath $file -PathType Leaf) {
        $ext = [System.IO.Path]::GetExtension($file).ToLower()
        $contentType = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }

        $bytes = [System.IO.File]::ReadAllBytes($file)
        $res.ContentType = $contentType
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
        $res.OutputStream.Close()

        Write-Host "  ✓ $urlPath" -ForegroundColor Green
    } else {
        $res.StatusCode = 404
        $res.Close()
        Write-Host "  ✗ $urlPath (no encontrado)" -ForegroundColor Red
    }
}

$listener.Stop()
