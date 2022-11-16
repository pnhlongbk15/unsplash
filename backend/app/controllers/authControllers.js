const { User } = require(__path_configs);
const bcrypt = require("bcrypt");

const authControllers = {
        registerUser: async (req, res) => {
                try {
                        const salt = await bcrypt.genSalt(10);
                        const hashedPassword = await bcrypt.hash(req.body.password, salt);
                        //Create new user
                        const newUser = await new User({
                                first_name: req.body.firstName,
                                last_name: req.body.lastName,
                                email: req.body.email,
                                password: hashedPassword,
                        });
                        //Save to DB
                        const user = await newUser.save();
                        res.status(200).json(user);
                } catch (err) {
                        res.status(500).send(err.message);
                }
        },
        loginUser: async (req, res) => {
                try {
                        const user = await User.findOne({ email: req.body.email });
                        if (!user) {
                                return res.status(404).send("Isvalid email");
                        }

                        const validPassword = await bcrypt.compare(
                                req.body.password,
                                user.password
                        );
                        if (!validPassword) {
                                return res.status(404).send("Wrong password");
                        }

                        if (user && validPassword) {
                                const accessToken = authController.generateAccessToken(user);
                                const refreshToken = authController.generateRefreshToken(user);
                                // save token into DB
                                await new Token({
                                        refreshToken: refreshToken
                                }).save()
                                // save token into cookie
                                res.cookie("refreshToken", refreshToken, {
                                        httpOnly: true,
                                        secure: false,
                                        path: "/",
                                        sameSite: "strict"
                                })
                                const { password, ...others } = user._doc;
                                res.status(200).json({ user: { ...others, accessToken } })
                        }
                } catch(err) {
                        res.status(500).json(err); 
                }
        },
        generateAccessToken: (user) => {
                return jwt.sign(
                        {
                                id: user.id,
                                admin: user.admin,
                        },
                        process.env.JWT_ACCESS_SECRET_KEY,
                        { expiresIn: "300s" }
                );
        },
        generateRefreshToken: (user) => {
                return jwt.sign(
                        {
                                id: user.id,
                                admin: user.admin,
                        },
                        process.env.JWT_REFRESH_SECRET_KEY,
                        { expiresIn: "365d" }
                );
        },
}

module.exports = authControllers;

