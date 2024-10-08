function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');
    const messageText = messageInput.value;

    if (messageText) {
        // إنشاء عنصر رسالة جديدة
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user');
        messageElement.textContent = messageText;

        // إضافة الرسالة إلى قسم الرسائل
        messagesDiv.appendChild(messageElement);
        
        // تنظيف حقل الإدخال
        messageInput.value = '';

        // تمرير الرسالة إلى الأسفل
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    } else {
        alert('يرجى كتابة رسالة قبل الإرسال.');
    }
}

// لتسهيل المحادثة، يمكن إضافة رسائل وهمية من الطرف الآخر
setInterval(() => {
    const randomMessages = [
        "مرحبًا! كيف حالك؟",
        "هل ترغب في الدردشة حول موضوع معين؟",
        "أين تعيش؟",
        "ما هي اهتماماتك؟"
    ];
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'other');
    messageElement.textContent = randomMessage;

    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}, 10000); // إرسال رسالة وهمية كل 10 ثواني
