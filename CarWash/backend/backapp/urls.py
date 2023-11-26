from django.urls import path,include
from . import views


urlpatterns = [
    path('UserRegisterSerializerAPIView',views.UserRegisterSerializerAPIView.as_view(),name='UserRegisterSerializerAPIView'),
    path('LoginUserAPIView',views.LoginUserAPIView.as_view(),name='LoginUserAPIView'),
    path('bookingmethod',views.bookingmethod.as_view(),name='bookingmethod'),
    path('Getallusers',views.Getallusers.as_view(),name='Getallusers'),
    path('Getsinglebooking/<int:id>',views.Getsinglebooking.as_view(),name='Getsinglebooking'),
    path('sendmailmethod',views.sendmailmethod.as_view(),name='sendmailmethod'),
]


