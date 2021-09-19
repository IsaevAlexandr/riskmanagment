class Risk:
    """Класс риск"""
    def __init__(self):
        self.id: int = None

        # Description
        self.name: str = None
        self.reason: str = None
        self.responsible_person: str = None
        self.business_process: str = None
        self.recommendations: list = None
        self.strategy: str = None

        self.probability: float = None  # rub
        self.elimination_time: float = None  # hours
        self.expenses: float = None  # rub
