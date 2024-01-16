#!/usr/bin/env python3

from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from models import db, Hero, Power, HeroPower

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/')
def home():
    return ''

@app.route('/heroes', methods=['GET'])
def get_heroes():
    heroes = Hero.query.all()
    heroes_data = [
        {"id": hero.id, "name": hero.name, "super_name": hero.super_name}
        for hero in heroes
    ]
    return jsonify(heroes_data)

@app.route('/heroes/<int:id>', methods=['GET'])
def get_hero_by_id(id):
    hero = Hero.query.get(id)
    if hero:
        powers = [
            {"id": power.id, "name": power.name, "description": power.description}
            for power in hero.powers
        ]
        hero_data = {
            "id": hero.id,
            "name": hero.name,
            "super_name": hero.super_name,
            "powers": powers
        }
        return jsonify(hero_data)
    else:
        return jsonify({"error": "Hero not found"}), 404

@app.route('/powers', methods=['GET'])
def get_powers():
    powers = Power.query.all()
    powers_data = [
        {"id": power.id, "name": power.name, "description": power.description}
        for power in powers
    ]
    return jsonify(powers_data)

@app.route('/powers/<int:id>', methods=['GET'])
def get_power_by_id(id):
    power = Power.query.get(id)
    if power:
        power_data = {
            "id": power.id,
            "name": power.name,
            "description": power.description
        }
        return jsonify(power_data)
    else:
        return jsonify({"error": "Power not found"}), 404

@app.route('/powers/<int:id>', methods=['PATCH'])
def update_power(id):
    power = Power.query.get(id)
    if power:
        data = request.json
        if 'description' in data:
            power.description = data['description']
            db.session.commit()
            updated_power = {
                "id": power.id,
                "name": power.name,
                "description": power.description
            }
            return jsonify(updated_power)
        else:
            return jsonify({"errors": ["validation errors"]}), 400
    else:
        return jsonify({"error": "Power not found"}), 404

@app.route('/hero_powers', methods=['POST'])
def create_hero_power():
    data = request.json
    if all(key in data for key in ('strength', 'power_id', 'hero_id')):
        hero = Hero.query.get(data['hero_id'])
        power = Power.query.get(data['power_id'])
        if hero and power:
            hero_power = HeroPower(hero_id=hero.id, power_id=power.id, strength=data['strength'])
            db.session.add(hero_power)
            db.session.commit()
            powers = [
                {"id": power.id, "name": power.name, "description": power.description}
                for power in hero.powers
            ]
            hero_data = {
                "id": hero.id,
                "name": hero.name,
                "super_name": hero.super_name,
                "powers": powers
            }
            return jsonify(hero_data)
        else:
            return jsonify({"errors": ["validation errors"]}), 400
    else:
        return jsonify({"errors": ["validation errors"]}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)