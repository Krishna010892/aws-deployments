FROM python:3.14-alpine

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy source code
COPY . .

EXPOSE 5000

# Run app with gunicorn
CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:5000"]
