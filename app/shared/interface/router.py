from typing import Type
from abc import ABC, abstractmethod
from ..helpers import *


class RouterInterface(ABC):
    """Defining Route"""

    @abstractmethod
    def route(self, http_request: Type[HttpRequest]) -> HttpResponse:
        """
        Route
        :param http_request: Type[HttpRequest]
        :return: HttpResponse
        """

        raise Exception("Should implement method: route")
