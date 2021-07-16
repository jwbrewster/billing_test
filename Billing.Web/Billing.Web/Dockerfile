#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

#RUN apt-get update && apt-get upgrade -y && \
    #apt-get install -y nodejs npm

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
RUN npm install

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build

#RUN apt-get update && apt-get upgrade -y && \
    #apt-get install -y nodejs npm

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
RUN npm install

WORKDIR /src
COPY ["./Billing.Web/Billing.Web.csproj", "Billing.Web/"]
RUN dotnet restore "Billing.Web/Billing.Web.csproj"
COPY . .
WORKDIR "/src/Billing.Web"
RUN dotnet build "Billing.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Billing.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Sierra.Billing.Web.dll"]