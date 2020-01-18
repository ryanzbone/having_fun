import { apps, work, stream } from './windows.js';

window.onload = () =>
{
  apps().open()
  work().open()
  stream().open()
}
