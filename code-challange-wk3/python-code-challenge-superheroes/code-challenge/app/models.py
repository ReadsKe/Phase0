from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Hero(db.Model):
    __tablename__ = 'hero'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    super_name = db.Column(db.String(100), nullable=False)
    
    hero_powers = db.relationship('HeroPower', back_populates='hero', overlaps="heroes,powers")
class Power(db.Model):
    __tablename__ = 'power'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    
    heroes = db.relationship('HeroPower', back_populates='power', overlaps="heroes,powers")

class HeroPower(db.Model):
    __tablename__ = 'hero_power'
    id = db.Column(db.Integer, primary_key=True)
    hero_id = db.Column(db.Integer, db.ForeignKey('hero.id'), nullable=False)
    power_id = db.Column(db.Integer, db.ForeignKey('power.id'), nullable=False)
    strength = db.Column(db.String(100), nullable=False)

    hero = db.relationship('Hero', back_populates='hero_powers', overlaps="heroes,powers")
    power = db.relationship('Power', back_populates='heroes', overlaps="heroes,powers")