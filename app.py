from flask import Flask, render_template, url_for

app = Flask(__name__)

IMAGE_LIST = [['cloth1.png', 'cloth2.png', 'cloth3.png'], ['cloth4.png', 'cloth5.png', 'cloth6.png'], ['cloth7.png', 'cloth8.png', 'cloth9.png']]

@app.route('/')
def main():
    return render_template('dressing.html', image_list=IMAGE_LIST)


if __name__ == '__main__':
    app.run(
        debug=True
    )
