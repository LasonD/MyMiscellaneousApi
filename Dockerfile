#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base

RUN apt-get -y update; apt-get -y install curl
RUN curl -sl https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs
RUN npm install -g npm@latest

WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["MyMiscellaneousApi/MyMiscellaneousApi.csproj", "MyMiscellaneousApi/"]
RUN dotnet restore "MyMiscellaneousApi/MyMiscellaneousApi.csproj"
COPY . .
WORKDIR "/src/MyMiscellaneousApi"
RUN dotnet build "MyMiscellaneousApi.csproj" -c Release -o /app/build
RUN npm install 
RUN npm run build

FROM build AS publish
RUN dotnet publish "MyMiscellaneousApi.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyMiscellaneousApi.dll"]