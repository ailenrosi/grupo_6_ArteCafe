const { users, writeUsersJSON } = require("../data/dataBase");
const { validationResult } = require("express-validator");
let bcrypt = require("bcryptjs");
let db = require("../database/models");

module.exports = {
  user: (req, res) => {
    res.render("user", {
      users,
      session: req.session,
    });
  },

  register: (req, res) => {
    res.render("register", {
      session: req.session,
    });
  },

  profile: (req, res) => {
    let user = users.find((user) => user.id === req.session.user.id);

    res.render("Profile", {
      user,
      session: req.session,
    });
  },

  profileEdit: (req, res) => {
    res.render("profileEdit", {
      session: req.session,
    });

    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { name, email, password } = req.body;

      db.User.update(
        {
          name,
          email,
          password,
          avatar: req.file ? req.file.filename : user.avatar,
        },
        {
          where: {
            id: req.session.userLogin.id,
          },
        }
      )
        .then(() => {
          res.redirect("/user");
        })
        .catch((error) => console.log(error));
    }
  },

  updateProfile: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let user = users.find((user) => user.id === +req.params.id);

      let { name, last_name, tel, address, pc, province, city } = req.body;

      user.name = name;
      user.last_name = last_name;
      user.tel = tel;
      user.address = address;
      user.pc = pc;
      user.province = province;
      user.city = city;
      user.avatar = req.file ? req.file.filename : user.avatar;

      writeUsersJSON(user);

      delete user.pass;

      req.session.user = user;

      res.redirect("/user");
    } else {
      res.render("ProfileEdit", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.User.findOne({
        where: { email: req.body.email },
      })
        .then((user) => {
          req.session.user = {
            id: user.id,
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            avatar: user.avatar,
            rol: user.rol,
          };

          if (req.body.remember) {
            res.cookie("userarte_cafe", req.session.user, {
              expires: new Date(Date.now() + 900000),
              httpOnly: true,
            });
          }

          res.locals.user = req.session.user;

          res.redirect("/");
        })
        .catch((error) => {
          res.send(error);
        });
    } else {
      res.render("user", {
        errors: errors.mapped(),
        session: req.session,
      });
    }
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (req.fileValidatorError) {
      let image = {
        param: "image",
        msg: req.fileValidatorError,
      };
      errors.push(image);
    }

    if (errors.isEmpty()) {
      let { name, last_name, phone, email, pass } = req.body;

      db.User.create({
        name,
        last_name,
        phone,
        email,
        pass: bcrypt.hashSync(pass, 12),
        avatar: req.file ? req.file.filename : "coffe_default.png",
        rol: 2,
      }).then(() => {
        res.redirect("/");
      });
    } else {
      res.render("register", {
        errors: errors.mapped(),
        old: req.body,
        session: req.session,
      });
    }
  },

  userProfile: (req, res) => {
    db.User.findOne({
      where: { id: req.session.user.id },
    }).then((user) => {
      res.render("userProfile", {
        user: user.dataValues,
      });
    });
  },

  userEdit: (req, res) => {
    db.User.findOne({
      where: { id: req.session.user.id },
    }).then((user) => {
      res.render("userEdit", {
        user: user.dataValues,
      });
    });
  },

  userUpdate: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let { name, last_name, email, phone } = req.body;
      db.User.update(
        {
          name,
          last_name,
          email,
          phone,
        },
        {
          where: {
            id: req.session.user.id,
          },
        }
      )
        .then(() => {
          res.redirect("userProfile");
        })
        .catch((error) => console.log(error));
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    if (req.cookies.userarte_cafe) {
      res.cookie("userArte_cafe", "", { maxAge: -1 });
    }

    res.redirect("/");
  },

userDelete: (req,res) => {
  req.session.destroy();
  if (req.cookies.user){
    res.cookie('user','',{maxAge:-1});
  } 
  db.User.destroy({
    where:{
      id : req.params.id
    }
  })
  res.redirect('/') 
}
}