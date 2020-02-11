from bs4 import BeautifulSoup
import requests
import json
import os

# domainRoot = 'http://www.sas.rochester.edu/lin/DeneSpeechAtlas/dene-language-groups'
domainRoot = 'DeneSpeechAtlas/dene-language-groups'
filepath = 'cleanRoute.txt'
data = {}

with open(filepath) as fp:
    line = fp.readline()
    while line:
        line = line.rstrip()
        addr = domainRoot+line
        try:
            # page = requests.get(addr)
            page = open(addr, errors='ignore')
        except:
            print("ERROR: " + addr)
            line = fp.readline()
            continue

        # soup = BeautifulSoup(page.content, 'html.parser')
        soup = BeautifulSoup(page.read(), 'html.parser')


        image_path = []
        for img in soup.findAll('img'):
            image_path.append(img.get('src'))
        
        audio_path = []
        for audio in soup.findAll('audio'):
            audio_path.append(audio.find('source').get('src'))

        video_path = []
        for video in soup.findAll('video'):
            video_path.append(video.find('source').get('src'))

        page_data = {"img":image_path, "audio": audio_path, "vid":video_path}

        data[line] = page_data

        line = fp.readline()
print(json.dumps(data, indent = 4))
