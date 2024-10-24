import React, { useEffect, useRef } from 'react';

const StarBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const stars = [];
        const numStars = 100;

        const minStarSize = 0.1; 
        const maxStarSize = 0.1; 

        for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * (maxStarSize - minStarSize) + minStarSize,
            alpha: Math.random(),
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
        });
        }

        const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawStars();
        connectStars();
        updateStars();
        requestAnimationFrame(animate);
        };

        const drawStars = () => {
        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });
        };

        const connectStars = () => {
        for (let i = 0; i < stars.length; i++) {
            for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.stroke();
            }
            }
        }
        };

        const updateStars = () => {
        stars.forEach((star) => {
            star.x += star.dx;
            star.y += star.dy;

            // Rebotar las estrellas al borde
            if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
            if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
        });
        };

        const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars.length = 0; // Limpiar estrellas
        for (let i = 0; i < numStars; i++) {
            stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            alpha: Math.random(),
            dx: (Math.random() - 0.5) * 0.5,
            dy: (Math.random() - 0.5) * 0.5,
            });
        }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Inicializar el tamaño del canvas

        animate();

        return () => {
        window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1, width: '100%', height: '150vh' }} />;

    };

export default StarBackground;
