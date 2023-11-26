from django.contrib import admin


# Register your models here.
from .models import *

admin.site.register(login)
admin.site.register(register)
admin.site.register(booking)
class listView(admin.ModelAdmin):
    list_display=('id','Tag',)
admin.site.register(tag)