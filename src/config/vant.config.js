import { Button, List, Toast, Loading, Form, Field, CellGroup } from 'vant'
import 'vant/lib/index.css'

export function vant(app) {
  app.use(Button);
  app.use(List);
  app.use(Loading);
  app.use(Form);
  app.use(Field);
  app.use(CellGroup);
  app.use(Toast)
}