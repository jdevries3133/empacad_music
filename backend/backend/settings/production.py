import os

from .base import *
from .secret import SECRET_KEY

CORS_ALLOWED_ORIGINS = ['https://empacadmusic.org', 'http://empacadmusic.org']
CSRF_TRUSTED_ORIGINS = ['empacadmusic.org']
ALLOWED_HOSTS = ['api.empacadmusic.org']


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '{levelname} {asctime} {module} {process:d} {thread:d} {message}',
            'style': '{',
        },
    },
    'handlers': {
        'file_logger': {
            'level': 0,
            'class': 'logging.FileHandler',
            'filename': '/var/log/api_empacad_music/django.log',
            'formatter': 'verbose',
        },
    },
    'root': {
        'handlers': ['file_logger'],
        'level': 'ERROR',
        'propagate': True,
    },
    'loggers': {
        'file': {
            'handlers': ['file_logger'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}
