"use client";
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

let stompClient = null;

export function connectSocket(onMessage) {
    if (stompClient) return; // already connected

    stompClient = new Client({
        webSocketFactory: () => new SockJS('http://208.72.36.40:8077/ws-notification'),
        reconnectDelay: 5000,
        debug: (str) => console.log('[STOMP]', str),
        onConnect: () => {
            // console.log('Connected to STOMP');
            stompClient.subscribe('/topic/notifications', (message) => {
                const body = JSON.parse(message.body);
                onMessage(body);
            });
        },
        onStompError: (frame) => {
            // console.error('STOMP Error:', frame);
        },
    });

    stompClient.activate();
}

export function disconnectSocket() {
    if (stompClient) {
        stompClient.deactivate();
        stompClient = null;
    }
}
