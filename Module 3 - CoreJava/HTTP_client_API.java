import java.net.http.*;
import java.net.URI;

public class HTTP_client_API {
    public static void main(String[] args)
            throws Exception {

        HttpClient client =
                HttpClient.newHttpClient();

        HttpRequest req =
                HttpRequest.newBuilder()
                        .uri(
                                URI.create(
                                        "https://api.github.com"))
                        .build();

        HttpResponse<String> res =
                client.send(
                        req,
                        HttpResponse.BodyHandlers.ofString());

        System.out.println(res.statusCode());
        System.out.println(res.body());
    }
}