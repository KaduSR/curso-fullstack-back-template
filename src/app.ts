import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

class App {
public app: express.Application;

public constructor() {
  this.app = express();
  this.app.use(cors());

  this.initMongoose();
  this.connectDataBase();
}

private initMongoose(): void {
  mongoose.set('runValidators', true);
}

private connectDataBase(): void {
  mongoose.connect('mongodb+srv://carlos847:r35pQODhra4OZa49@cluster0.ylamisr.mongodb.net/curso-javascript?retryWrites=true&w=majority&appName=Cluster0', {
    // useUnifiedTopology: true,
    // useNewUrlParser: true,
    // useCreateIndex: true,
  });
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}
export default App;
