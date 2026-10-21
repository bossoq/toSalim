FROM tensorflow/tensorflow:2.7.1

WORKDIR /app

# pythainlp 3.0.5 ships an invalid PEP 440 dependency specifier ("nltk>=3.3.*")
# that pip >= 24.1 rejects; the old `pipenv install` flow bundled a modern pip and
# so could not resolve the graph. Pin pip < 24.1 and install the exact (working)
# versions directly — no behavior change, just a buildable image.
RUN pip install --no-cache-dir "pip<24.1" && \
    pip install --no-cache-dir \
      pythainlp==3.0.5 \
      flask==2.0.3 \
      waitress==2.0.0 \
      pandas==1.4.1 \
      tensorflow-cpu==2.8.0

COPY /rootfs /app

CMD ["python", "-u", "app.py"]
