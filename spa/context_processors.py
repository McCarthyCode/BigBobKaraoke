import pytz

from datetime import datetime
from django.conf import settings


def footer(request):
    return {'year': datetime.now(pytz.timezone(settings.TIME_ZONE)).year}
