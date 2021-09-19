from pymongo import MongoClient


class DB:
    """БД Mongodb"""
    def __init__(self):
        self.connection = self.connect()

    def connect(self):
        """Соединение с БД"""
        connection = "mongodb+srv://user:user@cluster0.ar3jk.mongodb.net/myFirstDatabase"  # todo warning hardcode
        client = MongoClient(connection)
        return client['drilling_monitor']

    def get_event_collection(self):
        """Получение таблицы событий"""
        return self.connection["events"]
