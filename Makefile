start-infra:
	docker start nsvrdb nsvrmq nsv-pg-auth nsv-pg-user nsv-pg-hevent

stop-infra:
	docker stop nsvrdb nsvrmq nsv-pg-auth nsv-pg-user nsv-pg-hevent

exec-%:
	docker exec -it $* bash

migrate-%:
	bun --cwd apps/$* prisma migrate dev

start-client:
	bun --cwd apps/client dev
