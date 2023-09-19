import pandas as pd
import sys

from src.components.data_ingestion import DataIngestion
from src.components.data_transformation import DataTransformation
from src.components.model_trainer import ModelTrainer

class TrainPipeline:
    def __init__(self):
        pass

    def train(self):
        data_ingestor = DataIngestion()
        train_data, test_data, raw_data = data_ingestor.initiate_data_ingestion()
        data_transformer = DataTransformation()
        train_arr, test_arr, _ = data_transformer.initiate_data_transformation(train_data, test_data, raw_data, 'math_score')
        model_trainer = ModelTrainer()
        model_trainer.initiate_model_trainer(train_arr, test_arr)