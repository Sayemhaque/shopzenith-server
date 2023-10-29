const User = require("../model/user.model");
const bcrypt = require("bcrypt")



exports.registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userExist = await User.findOne({ email })

        if (!username || !email || !password) {
            return res.status(400).json({ error: "Required every field" })
        }
        if (userExist) {
            return res.status(400).json({ error: "User already exist" })
        }

        //hash original password
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()
        return res.status(201).json({ message: "User created successfully", status: true, newUser })

    } catch (error) {
        res.status(500).json({ error: "internal server error", error })
    }
}



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Require every fields" })
        }
        const user = await User.findOne({email})

        if (!user) {
            return res.status(404).json({ error: "Invalid user or password" })
        }
         //compare passwords
         const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(404).json({ error: "Invalid user or password" })
        }
        res.status(200).json({ message: "login successfully", user: true })
    } catch (error) {
        res.status(500).json({ error: "internal server error", error })
    }
}