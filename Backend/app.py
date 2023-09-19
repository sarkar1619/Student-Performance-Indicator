from flask import Flask, request, render_template
from src.pipeline.predict_pipeline import CustomData, PredictPipeline
from src.pipeline.train_pipeline import TrainPipeline

app = Flask(__name__)

## Route for a home page
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict_data', methods = ['GET', 'POST'])
def predict_datapoint():
    if request.method == 'GET':
        return render_template('home.html')
    else:
        data = CustomData(
            gender = request.form.get('gender'),
            race_ethnicity = request.form.get('race_ethnicity'),
            parental_level_of_education = request.form.get('parental_level_of_education'),
            lunch = request.form.get('lunch'),
            test_preparation_course = request.form.get('test_preparation_course'),
            reading_score = request.form.get('reading_score'),
            writing_score = request.form.get('writing_score')
        )
        pred_df = data.get_data_as_data_frame()
        
        predict_pipeline = PredictPipeline()
        results = predict_pipeline.predict(pred_df)
        
        return str(results[0])
    
@app.route('/train_data')
def train_datapoint():
    train_pipeline = TrainPipeline()
    train_pipeline.train()
    return "OK"

# Debugging
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)