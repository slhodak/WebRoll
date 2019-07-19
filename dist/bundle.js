const host = 'http://localhost:4000';

const scripts = [
  '/piano_roll/lib/helpers.js',
  '/piano_roll/index.js',
  '/piano_roll/editor.js',
  '/piano_roll/score.js'
];

let reference = document.getElementsByClassName('scripts')[0];

function addScripts(scripts, reference) {
  scripts.forEach(title => {
    let script = document.createElement('script');
    script.src = host + title;
    script.type = "module"
    document.body.insertBefore(script, reference);
  });
}

addScripts(scripts, reference);
