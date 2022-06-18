// import _ from 'lodash'
import './style.css'
/**
 * 使用webpack内置的 Asset Modules, 将其他资源混入我们的项目中
 * 被引用过的图片会处理并添加到output目录,且变量将包含该图像在处理后的最终url
 * css-loader 使用类似的过程处理CSS中的 url('../..png')
 * html-loader 以相同的方式处理<img src="./..png" />
 */
import img from './img/webpack.jpg'
function component() {
  const element = document.createElement('div');
  // element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.innerHTML = 'hello world';
  element.classList.add('hello');

  // 添加图片到已经存在的div中
  const myImg = new Image();
  myImg.src = img;
  element.appendChild(myImg);

  return element;
}

document.body.appendChild(component());
