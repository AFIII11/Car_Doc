
from django.shortcuts import render,redirect
from .serializers import UserRegisterSerializer,bookingserializer,LoginSerializer,tagserializer
from .models import login
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import register,login,booking
from django.conf import settings
from django.core.mail import send_mail  



class UserRegisterSerializerAPIView(GenericAPIView):
    serializer_class_register=UserRegisterSerializer
    serializer_class_login=LoginSerializer

    def post(self,request):
        login_id=''
        Name=request.data.get('name')
        lastName=request.data.get('lastName')
        Email=request.data.get('email')
        username=request.data.get('username')
        password=request.data.get('password')
        role='user'
        if(login.objects.filter(username=username)):
            return Response({'message':'Duplicate username Found!'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
            # print(serializer_login)

        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
            print(login_id)
        serializer=self.serializer_class_register(data={'name':Name,'email':Email,'log_id':login_id,'lastName':lastName})    
        # print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'User Registered Successfully','success':True},status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class LoginUserAPIView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self,request):
        email=""
        username=request.data.get('username')
        password=request.data.get('password')
        logreg=login.objects.filter(username=username,password=password)
        if(logreg.count()>0):
            read_serializer=LoginSerializer(logreg,many=True)
            for i in read_serializer.data:
                id=i['id']
                role=i['role']
            regdata=register.objects.all().filter(log_id=id).values()   
            print(regdata)  
            for i in regdata:
                user_id=i['id']
                email=i['email']
            return Response({'data':{'login_id':id,'email':email,'username':username,'password':password,'role':role,'user_id':user_id}})
        else:
            return Response({'data':'username or password is invalid','success':False,},status=status.HTTP_400_BAD_REQUEST)
        
class bookingmethod(GenericAPIView):
    serializer_class=bookingserializer
    def post(self,request):
        name=request.data.get('name')
        phone=request.data.get('phone')
        category=request.data.get('category')
        date=request.data.get('date')
        time=request.data.get('time')
        log_id=request.data.get('log_id')
        print(category)
        serializer=self.serializer_class(data={
             'name': name,
            'phone': phone,
            'category': category,
            'date': date,
            'time': time,
            'log_id':log_id
        })
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data})
        else:
          return Response({'error': serializer.errors})

class Getallusers(GenericAPIView):
    serializer_class=UserRegisterSerializer
    def get(self,request):
        user_data=register.objects.all()
        user=UserRegisterSerializer(user_data,many=True)
        return Response({'data':user.data})
    
class Getsinglebooking(GenericAPIView):
    serializer_class=bookingserializer
    serializer_tag=tagserializer
    def get(self,request,id):
        book_data=booking.objects.get(log_id=id)
        category=book_data.category.all()
        print(category)
        for i in category:
            print(i)
        serializer=self.serializer_class(book_data)
        serializer2=self.serializer_tag(category,many=True)
        return Response({'data':serializer.data,'data2':serializer2.data},status=status.HTTP_200_OK)

class sendmailmethod(GenericAPIView):
    def post(self,request):  
        to=request.data.get('email')
        subject = request.data.get('subject')  
        msg     = "Congratulations for your success"  
        res     = send_mail(subject, msg, settings.EMAIL_HOST_USER, [to])  
        if(res == 1):  
            msg = "Mail Sent Successfuly"  
        else:  
            msg = "Mail could not sent"  
        return Response(msg)
    