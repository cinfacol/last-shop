from __future__ import absolute_import

import os

from celery import Celery
from . import settings

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

app = Celery("config")

app.config_from_object("config.settings", namespace="CELERY"),

app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
