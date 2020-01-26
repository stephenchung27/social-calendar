FROM python:3.7-alpine

WORKDIR /app
COPY . /app

RUN pip install -r /app/requirements.txt

CMD flask run --host=0.0.0.0