var gitmodules = '[submodule "code"]\n  path = code\n  url = https://github.com/AdamRaichu/code\n  branch = ghpages-mirror-test\n[submodule "games"]\n  path = games\n  url = https://github.com/AdamRaichu/games\n  branch = main\n'
var gitmodules2 = '[submodule "code"]\n  path = code\n  url = https://github.com/AdamRaichu/code\n  branch = ghpages-mirror-test\n'

function gitmodulesToObj(file) {
  var o = (file.match(/\n\[/g) || [])
  if (o.length === 0) {
    // if there is only one module
    return JSON.parse(
      (file.replace(/\[/g, "{")
        .replace(/\]/g, "")
        .replace(/\n/g, '","')
        .replace(/=/g, '":"')
        .replace(/submodule/g, '"name":')
        .replace(/ /g, "")
        .replace('""', '"') +
        "}"
      ).replace('"}', "}").replace(",}", "}")
    )
  } else {
    // more than one
  }
}

var module1 = gitmodulesToObj(gitmodules2)
core.setOutput('MODULE_ONE_URL', module1.url);
core.setOutput("MODULE_ONE_BRANCH", module1.branch)