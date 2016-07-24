var h = require('hyperscript')
var plugs = require('../plugs')


var avatar_image = plugs.first(exports.avatar_image = [])
var avatar_name = plugs.first(exports.avatar_name = [])
var avatar_action = plugs.map(exports.avatar_action = [])
var avatar_edit = plugs.first(exports.avatar_edit = [])

exports.avatar_profile = function (id) {
  return avatar_edit(id)

  return h('div.row.profile',
    avatar_image(id),
    h('div.profile__info', 
      h('strong', avatar_name(id)), 
        avatar_action(id))
  )
}
