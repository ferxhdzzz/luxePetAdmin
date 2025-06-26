import Employees from '../models/Employees.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    const { name, lastName, email, telefono, password, typeEmployee } = req.body;

    try {
        // Verificar si el empleado ya existe
        const existingEmployee = await Employees.findOne({ email });
        if (existingEmployee) {
            return res.status(400).json({ message: 'El correo electrónico ya está registrado.' });
        }

        // Cifrar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear nuevo empleado
        const newEmployee = new Employees({
            name,
            lastName,
            email,
            telefono,
            password: hashedPassword,
            typeEmployee: typeEmployee || 'user' // Rol por defecto
        });

        await newEmployee.save();

        // Crear token
        const token = jwt.sign({ id: newEmployee._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        });

        res.status(201).json({ token, message: 'Usuario registrado exitosamente.' });

    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el servidor al registrar el usuario.' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el empleado existe
        const employee = await Employees.findOne({ email });
        if (!employee) {
            return res.status(400).json({ message: 'Credenciales inválidas.' });
        }

        // Comparar contraseñas
        const isMatch = await bcrypt.compare(password, employee.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas.' });
        }

        // Crear token
        const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES
        });

        res.json({ token, message: 'Inicio de sesión exitoso.' });

    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el servidor al iniciar sesión.' });
    }
};
