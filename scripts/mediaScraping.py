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
        main_content = soup.find(id='main-content').prettify("utf-8")
        
        
        html_name = line.replace('.html','/').replace('/', '-')
        with open(html_name+"main-content.html", "w+") as main_file:
            main_file.write(str(main_content))

        side_bar_content = soup.find(id='sidebar-content')
        if side_bar_content :
            with open(html_name+"sidebar-content.html", "w+") as side_bar:
                side_bar.write(str(side_bar_content.prettify("utf-8")))


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
