import sys
# from logger import logging    #for debugging


def error_message_details(error, error_detail: sys):
    _, _, exc_tb = error_detail.exc_info()

    file_name = exc_tb.tb_frame.f_code.co_filename
    line_number = exc_tb.tb_lineno
    error_message_received = str(error)

    error_message = 'Error occured in python script -\n File Name: [{0}]\n Line Number: [{1}]\n Error Message: [{2}]'.format(
        file_name,
        line_number,
        error_message_received
    )

    return error_message


class CustomException(Exception):
    '''
        This functon is responsible for raising Custom Exception
    '''
    def __init__(self, error_message, error_detail: sys):
        super().__init__(error_message)
        self.error_message = error_message_details(error_message, error_detail)

    def __str__(self):
        return self.error_message


# Debugging -
# if __name__ == '__main__':
#     try:
#         a = 1/0
#     except Exception as e:
#         logging.info('Divide by Zero')
#         raise CustomException(e, sys)
