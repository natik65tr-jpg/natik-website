function update() {
    if (!running) return;

    ballX += ballVX;
    ballY += ballVY;

    // Bounce off top and bottom
    if (ballY - ballSize <= 0 || ballY + ballSize >= H) {
        ballVY *= -1;
    }

    // Left paddle collision
    if (
        ballVX < 0 &&
        ballX - ballSize <= paddleMargin + paddleWidth &&
        ballX - ballSize >= paddleMargin - 10 &&
        ballY >= leftY &&
        ballY <= leftY + paddleHeight &&
        lastHitPaddle !== "left"
    ) {
        ballX = paddleMargin + paddleWidth + ballSize;
        ballVX = Math.abs(ballVX) + 0.15;
        ballVY =
            ((ballY - (leftY + paddleHeight / 2)) /
            (paddleHeight / 2)) * 5;

        hits++;
        lastHitPaddle = "left";
    }

    // Right paddle collision
    if (
        ballVX > 0 &&
        ballX + ballSize >= W - paddleMargin - paddleWidth &&
        ballX + ballSize <= W - paddleMargin + 10 &&
        ballY >= rightY &&
        ballY <= rightY + paddleHeight &&
        lastHitPaddle !== "right"
    ) {
        ballX = W - paddleMargin - paddleWidth - ballSize;
        ballVX = -Math.abs(ballVX) - 0.15;
        ballVY =
            ((ballY - (rightY + paddleHeight / 2)) /
            (paddleHeight / 2)) * 5;

        hits++;
        lastHitPaddle = "right";
    }

    // Reset hit lock after the ball leaves the paddle area
    if (
        ballX > paddleMargin + paddleWidth + 20 &&
        ballX < W - paddleMargin - paddleWidth - 20
    ) {
        lastHitPaddle = "";
    }

    // Update hit counter
    scoreDisplay.textContent = hits + " / " + targetHits;

    // Win after 20 hits
    if (hits >= targetHits) {
        endGame(true);
        return;
    }

    // Game over if the ball misses either paddle
    if (ballX < 0 || ballX > W) {
        endGame(false);
        return;
    }
}
function update() {
    if (!running) return;

    ballX += ballVX;
    ballY += ballVY;

    // Bounce from top and bottom
    if (ballY - ballRadius <= 0) {
        ballY = ballRadius;
        ballVY = Math.abs(ballVY);
    }

    if (ballY + ballRadius >= H) {
        ballY = H - ballRadius;
        ballVY = -Math.abs(ballVY);
    }

    // Left paddle collision
    if (
        ballVX < 0 &&
        ballX - ballRadius <= paddleMargin + paddleWidth &&
        ballX - ballRadius >= paddleMargin - 10 &&
        ballY >= leftY &&
        ballY <= leftY + paddleHeight &&
        lastHitPaddle !== "left"
    ) {
        ballX = paddleMargin + paddleWidth + ballRadius;
        ballVX = Math.abs(ballVX) + 0.15;

        ballVY =
            ((ballY - (leftY + paddleHeight / 2)) /
            (paddleHeight / 2)) * 5;

        hits++;
        lastHitPaddle = "left";
    }
}