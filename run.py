#!/usr/bin/env python
# -*-coding:utf-8-*- 
"""
@File  : run.py
@Author: Ezreal
@Date  : 2019-01-27 3:05
@Desc  : 
"""
import requests
from flask_cors import CORS
from flask import Flask, render_template, jsonify
from random import randint

app = Flask(__name__,
            static_url_path="",
            static_folder="dist",
            template_folder="dist")

cors = CORS(app, resources={"/api/*": {"origins": "*"}})


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': randint(1, 100)
    }
    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")
