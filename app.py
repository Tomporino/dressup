from flask import Flask, render_template, url_for
from os import listdir

app = Flask(__name__)


TOPS = listdir('static/images/tops')
BOTTOMS = listdir('static/images/bottoms')
DRESSES = listdir('static/images/dresses')
ACCESSORIES = listdir('static/images/accessories')

@app.route('/')
def main():
    return render_template('dressing.html', tops=TOPS, bottoms=BOTTOMS, dresses=DRESSES, accessories=ACCESSORIES)


if __name__ == '__main__':
    app.run(
        debug=True
    )
