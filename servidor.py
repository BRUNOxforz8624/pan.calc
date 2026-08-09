# -*- coding: utf-8 -*-
# Servidor HTTP para PanCalc (sin permisos de admin, con no-cache).
import http.server
import socketserver
import os

PORT = 8000
DIR = os.path.dirname(os.path.abspath(__file__))

MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.webmanifest': 'application/manifest+json',
}

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIR, **kwargs)

    def end_headers(self):
        # No dejar que el navegador cachee: siempre sirve la version nueva
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def guess_type(self, path):
        ext = os.path.splitext(path)[1].lower()
        return MIME.get(ext, 'application/octet-stream')

    def log_message(self, fmt, *args):
        print('  [%s] %s' % (self.address_string(), fmt % args))

class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True

if __name__ == '__main__':
    try:
        srv = ThreadingServer(('0.0.0.0', PORT), Handler)
    except OSError as e:
        print('No se pudo iniciar el servidor:', e)
        raise SystemExit(1)
    print('PANCALC - Servidor activo en:')
    print('  http://localhost:%d' % PORT)
    srv.serve_forever()
