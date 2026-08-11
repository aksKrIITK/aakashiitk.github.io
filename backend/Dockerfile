# Stage 1: Build Spring Boot JAR using Maven
FROM maven:3.9-eclipse-temurin-17-alpine AS builder
WORKDIR /app

# Cache dependencies
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source and package executable JAR
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Minimal Java Runtime Environment
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy built JAR artifact from builder stage
COPY --from=builder /app/target/*.jar app.jar

# Expose port (overridden automatically by Render/Railway via $PORT)
EXPOSE 5000
ENV PORT=5000

# Run Spring Boot Application
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "app.jar"]
