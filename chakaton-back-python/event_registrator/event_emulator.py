"""Модуль регистрации входящих сигналов с датчиков"""

import random
import datetime
import threading
import time
from dateutil import parser

import parameters
from classes.Event import Event


class EventEmulator:
    """Иммитация получения и обработки сигнала"""
    def __init__(self, event_id, db_collection):
        self.event_id = event_id
        self.db_collection = db_collection

    def start(self):
        """Запуск обработки сигналов"""
        event_thread = threading.Thread(target=self.event_emulator)
        event_thread.daemon = True
        event_thread.start()

    def event_emulator(self):
        """Обработка сигнала"""
        next_call = time.time()
        while True:
            moment = datetime.datetime.now()
            status = self.generate_event_status()
            event = Event(self.event_id, status, moment)
            self.db_collection.insert_one(event.dict())
            next_call = next_call + parameters.event_frequency * 60
            time.sleep(next_call - time.time())

    @staticmethod
    def generate_event_status():
        """Генерация случайного сигнала"""
        return random.choices([0, 1],
                              weights=[parameters.bad_event_probability, 1 - parameters.bad_event_probability])[0]
