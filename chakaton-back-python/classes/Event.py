class Event:
    """Класс наступления события (сигнал датчика)"""
    def __init__(self, event_id, description, date):
        self.id = event_id
        self.description = description
        self.datetime = date

    def dict(self):
        return self.__dict__
