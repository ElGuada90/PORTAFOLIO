from flask import Flask, render_template, request, flash, redirect, url_for, session
import sqlite3
from datetime import timedelta
from markupsafe import escape

webapp = Flask(__name__)

# Ruta de la página de inicio
@webapp.route('/')
def index():
    return render_template('homepage.html')


# Desactivar la caché del navegador
@webapp.after_request
def add_header(response):
    response.cache_control.no_store = True
    return response


if __name__ == '__main__':
    webapp.run(port=2000, debug=True)
    
