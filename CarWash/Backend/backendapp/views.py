from django.shortcuts import render
from .models import login,register
from .serializers import UserRegisterSerializer
from .serializers import LoginSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
# Create your views here.













class UserRegisterSerializerAPIView(GenericAPIView):
    serializer_class_register=UserRegisterSerializer
    serializer_class_login=LoginSerializer
    

    def post(self,request):
        login_id=''
        name=request.data.get('name')
        
        email=request.data.get('email')
        username=request.data.get('username')
        password=request.data.get('password')
        
        role='user'
        userstatus='0'
        if(login.objects.filter(username=username)):
            return Response({'message':'Duplicate username Found!'},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'username':username,'password':password,'role':role})
            print(serializer_login)

        if serializer_login.is_valid():
            log=serializer_login.save()
            login_id=log.id
            print(login_id)
        serializer=self.serializer_class_register(data={'name':name,'email':email,'log_id':login_id,'user_status':userstatus,'image':image})    
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'User Registered Successfully','success':True},status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)




class LoginUserAPIView(GenericAPIView):
    serializer_class=LoginSerializer
    def post(self,request):
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
                user_status=i['user_status']
                email=i['email']
              
              

            return Response({'data':{'login_id':id,'email':email,'username':username,'password':password,'role':role,'user_id':user_id,'user_status':user_status,}})
        else:
            return Response({'data':'username or password is invalid','success':False,},status=status.HTTP_400_BAD_REQUEST)

