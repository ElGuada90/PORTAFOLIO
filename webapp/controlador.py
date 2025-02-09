
# Importacion de librerias Python Flask

from flask import Flask, render_template
from webapp import app
from datetime import datetime


# Controlador de la ruta para la vista
@app.route('/')
@app.route('/home')
def home():
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %I:%M:%S %p")
    return render_template(
        "homepage.html",
        title = "EG90  Home",
        message = "Top Stream ",
        content =  formatted_now)  
