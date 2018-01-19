from .base import *


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'mosaicdl',
        'USER': 'root',
        'PASSWORD': 'root',
        'TEST': {
            'NAME': 'mosaicdltest',
        },
    }
}

# Cross Origin Request settings
# https://github.com/ottoyiu/django-cors-headers/

CORS_ORIGIN_WHITELIST = ('localhost:8080',)
