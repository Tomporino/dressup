from flask import Flask, render_template, url_for

app = Flask(__name__)

# IMAGE_LIST = [['cloth1.png', 'cloth2.png', 'cloth3.png'], ['cloth4.png', 'cloth5.png', 'cloth6.png'], ['cloth7.png', 'cloth8.png', 'cloth9.png']]
TOPS = [['adidas-tshirt-builder-top.png', 'builder-daddys-top.png', 'builder-denim-jacket-top.png'], ['gucci-pan-builder-top.png', 'mickey-gucci-builder-top.png', 'supmorty-builder-top.png']]
BOTTOMS = [['black-sweetpants-bottom.png', 'builder-jeanshort-bottom.png', 'girl-jeans-builder'], ['grey-sweatpants-builder-bottom.png']]
DRESSES = [['blackdress-builder.png', 'jeans-short-builder.png', 'jesus-neklace-builder.png'], ['redress-builder.png', 'whitedress-builder.png', 'yellowdress-builder.png']]


@app.route('/')
def main():
    return render_template('dressing.html', tops=TOPS, bottoms=BOTTOMS, dresses=DRESSES)


if __name__ == '__main__':
    app.run(
        debug=True
    )
