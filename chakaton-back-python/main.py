from db_io.db_connectiion import DB
from event_registrator.event_emulator import EventEmulator


def main():
    db = DB()

    # здесь перебор по тем факторам, которые контролятся
    for id in range(5):
        EventEmulator(id, db.get_event_collection()).start()

    for i in range(10**10):  # todo пока работает фронт
        pass


if __name__ == "__main__":
    main()
