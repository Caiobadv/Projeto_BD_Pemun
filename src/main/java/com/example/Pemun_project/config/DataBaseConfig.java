package com.example.Pemun_project.config;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DataBaseConfig {

    public Connection getConnection() throws SQLException {
        return DriverManager.getConnection("jdbc:mysql://localhost:3306/PEMUN_DBPROJECT?useSSL=false&serverTimezone=UTC", "root", "Caiodavi1!");
    }

}
