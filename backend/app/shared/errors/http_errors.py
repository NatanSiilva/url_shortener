class HttpErrors:
    """Class to define errors in http"""

    @staticmethod
    def error_422():
        """Method to define error 422"""

        return {"status_code": 422, "body": {"error": "Unprocessable Entity"}}

    @staticmethod
    def error_400():
        """Method to define error 400"""

        return {"status_code": 400, "body": {"error": "Bad Request"}}

    @staticmethod
    def error_404():
        """Method to define error 404"""

        return {"status_code": 404, "body": {"error": "Not Found"}}

    @staticmethod
    def error_409():
        """Method to define error 409"""

        return {"status_code": 409, "body": {"error": "Conflict"}}

    @staticmethod
    def error_500():
        """HTTP 500"""

        return {"status_code": 500, "body": {"error": "Internal Server Error"}}
